import {
  cloneElement,
  Fragment,
  isValidElement,
  ReactElement,
  ReactNode,
} from "react";
import styles from "./AnimatedText.module.css";

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  startDelay?: number;
}

const AnimatedText = ({
  children,
  delay = 0.03,
  duration = 0.35,
  startDelay = 0,
}: AnimatedTextProps) => {
  let wordIndex = 0;

  const renderText = (text: string, parentKey: string): ReactNode[] => {
    return text.split(/(\s+)/).map((part, index) => {
      // Preserve whitespace.
      if (/^\s+$/.test(part)) {
        return (
          <Fragment key={`${parentKey}-space-${index}`}>
            {part}
          </Fragment>
        );
      }

      const currentIndex = wordIndex++;

      return (
        <span
          key={`${parentKey}-word-${currentIndex}`}
          className={styles.word}
          style={{
            animationDelay: `${startDelay + currentIndex * delay}s`,
            animationDuration: `${duration}s`,
          }}
        >
          {part}
        </span>
      );
    });
  };

  const renderNode = (
    node: ReactNode,
    parentKey = "root"
  ): ReactNode => {
    // Text
    if (typeof node === "string") {
      return renderText(node, parentKey);
    }

    // Numbers
    if (typeof node === "number") {
      return renderText(String(node), parentKey);
    }

    // Arrays
    if (Array.isArray(node)) {
      return node.map((child, index) => (
        <Fragment key={`${parentKey}-${index}`}>
          {renderNode(child, `${parentKey}-${index}`)}
        </Fragment>
      ));
    }

    // React elements
    if (isValidElement(node)) {
      const element = node as ReactElement<{
        children?: ReactNode;
      }>;

      // Elements without children remain untouched.
      if (element.props.children == null) {
        return element;
      }

      return cloneElement(element, {
        children: renderNode(
          element.props.children,
          `${parentKey}-element`
        ),
      });
    }

    return node;
  };

  return <Fragment>{renderNode(children)}</Fragment>;
};

export default AnimatedText;
import SplitText from "./SplitText";

const SplitHeading = ({
  text,
  tag = "h2",
  className = "",
  textAlign = "center",
  splitType = "words, chars",
  delay = 24,
}) => (
  <SplitText
    tag={tag}
    text={text}
    splitType={splitType}
    delay={delay}
    duration={0.75}
    ease="power3.out"
    from={{ opacity: 0, y: 28, filter: "blur(6px)" }}
    to={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    threshold={0.16}
    rootMargin="-80px"
    textAlign={textAlign}
    className={`split-heading ${className}`}
  />
);

export default SplitHeading;

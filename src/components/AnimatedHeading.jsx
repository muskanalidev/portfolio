import TextType from "./TextType";

const AnimatedHeading = ({
  text,
  as = "h2",
  className = "",
  initialDelay = 80,
  typingSpeed = 42,
  cursorCharacter = "|",
}) => {
  return (
    <TextType
      as={as}
      text={text}
      loop={false}
      startOnVisible={false}
      showCursor={true}
      cursorCharacter={cursorCharacter}
      typingSpeed={typingSpeed}
      initialDelay={initialDelay}
      className={className}
      cursorClassName="animated-heading-cursor"
    />
  );
};

export default AnimatedHeading;

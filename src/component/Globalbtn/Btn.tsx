import Button from "./GlobalButoon";

const SomeComponent = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <Button label="Primary Button" onClick={handleClick} variant="primary" />
      <Button
        label="Secondary Button"
        onClick={handleClick}
        variant="secondary"
      />
      <Button label="Danger Button" onClick={handleClick} variant="danger" />
    </div>
  );
};

export default SomeComponent;

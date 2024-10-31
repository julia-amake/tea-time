import 'client-only';

export const getCssVariableValue = (name: string) => {
  const style = getComputedStyle(document.body);
  return style.getPropertyValue(name);
};

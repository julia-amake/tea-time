type SVGType = React.FC<React.SVGProps<SVGSVGElement>>;

type ObjectValue<ObjectType> = ObjectType[keyof ObjectType];

type ValueOf<T> = T[keyof T];
type KeyOf<T> = keyof T;

declare module '*.svg' {
  const SVG: SvgType;
  export default SVG;
}

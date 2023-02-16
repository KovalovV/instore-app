declare module "*.module.scss" {
  const value: Record<string, string>;
  export default value;
}

declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

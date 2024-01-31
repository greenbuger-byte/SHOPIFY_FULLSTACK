declare let imageType: typeof Image;
interface Window {
  Image: typeof imageType;
}

declare const window: Window;

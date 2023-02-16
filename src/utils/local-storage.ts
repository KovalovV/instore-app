import { config } from "config";

interface ILocalStorageService {
  get: <T>(key: string) => T | null;
  set: <T>(key: string, value: T) => void;
  remove: (key: string) => void;
  removeAll: () => void;
}

class LocalStorageService implements ILocalStorageService {
  public get<T>(key: string): T | null {
    const data: string | null = window.localStorage.getItem(
      `${config.storageNamespace}${key}`,
    );

    if (!data) {
      return null;
    }

    try {
      return JSON.parse(data);
    } catch {
      return null;
    }
  }

  public set<T>(key: string, value: T) {
    const objValue = JSON.stringify(value);

    window.localStorage.setItem(`${config.storageNamespace}${key}`, objValue);
  }

  public remove(key: string) {
    window.localStorage.removeItem(`${config.storageNamespace}${key}`);
  }

  public removeAll() {
    const storage = window.localStorage || {};
    Object.keys(storage).forEach((key: string) => {
      if (key.startsWith(config.storageNamespace)) {
        window.localStorage.removeItem(key);
      }
    });
  }
}

export const LocalStorage = new LocalStorageService();

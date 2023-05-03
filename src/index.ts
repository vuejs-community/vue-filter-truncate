type VueConstructor = {
  filter(id: string, definition?: Function): Function;
};

export function truncate(input: string, length: number): string {
  if (input.length <= length) {
    return input;
  }

  return `${input.substr(0, length)} …`;
}

export default {
  install(Vue: VueConstructor): void {
    Vue.filter('truncate', truncate);
  }
};

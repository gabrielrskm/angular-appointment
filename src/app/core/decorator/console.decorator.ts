export function miDecorador(variables: any[]) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    descriptor.value = function (...args: any[]) {
      console.log('Variables:', variables);
      return target[key].apply(this, args);
    };
  };
}
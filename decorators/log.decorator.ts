import { createDecorator } from 'vue-class-component'

// Declare Log decorator.
export const Log = createDecorator((options, key) => {
  // Keep the original method for later.
  const originalMethod = options.methods![key]!

  // Wrap the method with the logging logic.
  options.methods![key] = function wrapperMethod(...args) {
    // Print a log.
    console.group(`Invoked: ${key} with arguments: `)
    console.log(...args)
    console.groupEnd()

    // Invoke the original method.
    originalMethod.apply(this, args)
  }
})

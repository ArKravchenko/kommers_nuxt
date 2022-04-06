module.exports = {
  apps: [
    {
      name: 'kommersant_new_cluster',
      namespace: 'kommersant',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/.bin/nuxt-ts',
      args: 'start'
    }
  ]
}

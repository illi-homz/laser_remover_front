module.exports = {
    apps: [
      {
        name: 'Tatu Laser Remover',
        exec_mode: 'cluster',
        instances: '3', // Or a number of instances
        script: '.output/server/index.mjs',
        args: 'start'
      }
    ]
  }
const scssConfig: { [key: string]: string | number } = {
  $envColor: 'yellow',
  $platform: process.env.PLATFORM_NAME || 'platform2',
}

export default scssConfig

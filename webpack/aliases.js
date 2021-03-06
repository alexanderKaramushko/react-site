const aliases = (prefix = 'src') => ({
  '@api': `${prefix}/client/api/`,
  '@client': `${prefix}/client/`,
  '@common': `${prefix}/client/common/`,
  '@components': `${prefix}/client/components/`,
  '@localization': `${prefix}/client/localization/`,
  '@models': `${prefix}/client/models/`,
  '@routes': `${prefix}/client/routes/`,
  '@server': `${prefix}/server/`,
  '@store': `${prefix}/client/store/`,
  '@utils': `${prefix}/client/utils/`,
});

module.exports = aliases;
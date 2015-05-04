module.exports = function(grunt) {
  grunt.initConfig({
    broccoli: {
      dist: {
        dest: 'dist'
      }
    }
  })

  grunt.loadNpmTasks('grunt-broccoli')

  grunt.registerTask('watch', ['broccoli:dist:watch'])
  grunt.registerTask('build', ['broccoli:dist:build'])
}
<template>
  <!--
    Render the component for the current route, using the layout defined for that route.
    <component> is a dynamic Vue component, e.g. <component is="foo-bar" /> is effectively <foo-bar />
    -->
  <component :is="layout">
    <router-view :key="$route.fullPath" />

    <!-- Include the snackbar in all routes -->
    <toaster-message />
  </component>
</template>
<script>

import ToasterMessage from '@/components/toaster-message'
import SimpleLayout from '@/layouts/simple'

export default {
  components: {
    SimpleLayout,
    ToasterMessage
  },
  computed: {
    layout () {
      // append 'layout' to the layout name used in routes.js to match the name the layout component
      // is registered with (in the "components" section above)
      return (this.$route.meta.layout || 'default') + '-layout'
    }
  },
}
</script>

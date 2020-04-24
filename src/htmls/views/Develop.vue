<template>
  <div >
    <Layout :style="{marginTop: '60px',padding: '10px 10px 0'}">
      <Content :style="{margin: '5px 5px 0', minHeight: '580px', background: '#fff'}">
        <div class="serve-overview">
          <iframe src="/report.html?pageCode=0001"  frameborder="0" width="375px" height="667px" ></iframe>
        </div>
      </Content>
    </Layout>
  </div>
</template>

<script>
  export default {
    name: 'develop',
    components: {}
  }
</script>

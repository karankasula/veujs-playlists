<template>
    <header>
        <slot name="title"></slot>
        <h1>this is slot example</h1>
        <slot name="text"></slot>
        <div class="form-header">
            <slot name="form-header"></slot>
        </div>
        <div class="form-fields">
            <slot name="form-fields"></slot>
        </div>
        <div class="form-controls">
            <slot name="form-controls"></slot>
        </div>
        <div class="useful-links">
            <!-- <slot name="useful-links"> -->
            </slot>
        </div>
    </header>   
</template>

<script>
export default {
  data () {
    return {
      title:'this is header'
    }
  }
}
</script>

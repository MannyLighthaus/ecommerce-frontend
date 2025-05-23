<script setup>
import { BCard, BCardImg, BCardTitle, BCardText, BButton } from 'bootstrap-vue-next'
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

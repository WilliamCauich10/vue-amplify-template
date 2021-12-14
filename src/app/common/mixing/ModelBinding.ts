import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'ModelBinding',
})
export default class ModelBinding<T> extends Vue {
  onValueChange(val: T): void {
    this.$emit('input', val);
  }
}

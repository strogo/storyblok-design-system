import SbButton from './index'

export default {
  title: 'SbButton',
  component: SbButton
}

export const Default = () => ({
  components: { SbButton },
  template: '<SbButton label="Primary"/>'
})

export const AllSizes = () => ({
  components: { SbButton },
  template: `<div>
    <SbButton label="Small" size="small"/>
    <SbButton label="Default" />
    <SbButton label="Large" size="large"/>
  </div>`
})

export const IsLoading = () => ({
  components: { SbButton },
  template: '<SbButton label="Primary" isLoading/>'
})

export const IsDisabled = () => ({
  components: { SbButton },
  template: '<SbButton label="Disabled" is-disabled/>'
})

export const SecondaryButton = () => ({
  components: { SbButton },
  template: `<div>
    <SbButton label="Disabled" status="secondary" size="small"/>
    <SbButton label="Disabled" status="secondary" />
    <SbButton label="Disabled" status="secondary" is-disabled/>
    <SbButton label="Disabled" status="secondary" size="large"/>
  </div>`
})
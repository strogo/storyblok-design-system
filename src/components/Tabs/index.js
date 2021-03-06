import { cleanChildren } from '../../utils'

import { SbTab, SbTabAdd } from './components'

import './tabs.scss'

/**
 * @vue/component
 *
 * SbTabs component
 *
 * SbTabs is a container to SbTab component to perform a tab visualization.
 */
const SbTabs = {
  name: 'SbTabs',

  props: {
    orientation: {
      type: String,
      default: 'horizontal',
      validator: (val) => ['horizontal', 'vertical'].includes(val),
    },
    showAddButton: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: null,
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },

  data() {
    return {
      additionalTabs: [],
      children: [],
      childVNodes: [],
      onAddTab: false,
    }
  },

  computed: {
    childrenCount() {
      return this.children.length
    },
    currentIndex() {
      return this.children.findIndex((child) => {
        return this.$_getTabNameFromNode(child) === this.value
      })
    },
    enableAddButton() {
      return this.showAddButton && !this.onAddTab
    },
    isVertical() {
      return this.orientation === 'vertical'
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.childVNodes = Object.assign({}, this.$el.children)
      this.children = cleanChildren(this.$slots.default)
    })
  },

  methods: {
    /**
     * gets a node from children using the index and triggers the input with its name
     * @param {Number} index
     */
    $_changeActiveTab(index) {
      this.childVNodes[index].focus()

      const newTabName = this.$_getTabNameFromNode(this.children[index])
      this.$_triggerActiveTab(newTabName)
    },

    /**
     * creates a new tab with edit input
     * @param {CreateElement} h
     */
    $_createNewTab(h) {
      this.onAddTab = true

      this.additionalTabs.push(
        h(SbTab, {
          props: {
            label: 'New tab',
            name: 'new-tab',
            showEditInput: true,
          },
          on: {
            'edit-tab': this.handleEditTabOnCreate,
            'cancel-edit-tab': this.handleCancelEditOnCreate,
          },
        })
      )
    },

    /**
     * gets the name from a component node
     * @param {VNode} vnode
     */
    $_getTabNameFromNode(vnode) {
      return vnode.componentOptions.propsData.name
    },

    /**
     * emits an input event with the new tab identifier
     * @param {String} identifier name of the tab
     */
    $_triggerActiveTab(identifier) {
      this.$emit('input', identifier)
    },

    /**
     * emits a new-tab event with the new created tab
     * @param {{label: string, name: string}} content
     */
    handleEditTabOnCreate(content) {
      this.onAddTab = false
      this.additionalTabs = []
      this.$emit('new-tab', content)
    },

    /**
     * cancels the new create tab action
     */
    handleCancelEditOnCreate() {
      this.onAddTab = false
      this.additionalTabs = []
    },

    /**
     * gets the active tab event and trigger the input event
     * @param {String} identifier
     */
    handleActiveTab(identifier) {
      this.$_triggerActiveTab(identifier)
    },

    /**
     * handles keydown event in SbTab component and performs the navigation
     * @param {Event} event
     */
    handleKeyDown(event) {
      const lastIndex = this.childrenCount - 1

      if (event.key === 'ArrowRight' && !this.isVertical) {
        const newIndex =
          this.currentIndex !== lastIndex ? this.currentIndex + 1 : 0

        this.$_changeActiveTab(newIndex)
      }

      if (event.key === 'ArrowLeft' && !this.isVertical) {
        const newIndex =
          this.currentIndex === 0 ? lastIndex : this.currentIndex - 1

        this.$_changeActiveTab(newIndex)
      }

      if (event.key === 'ArrowUp' && this.isVertical) {
        const newIndex =
          this.currentIndex === 0 ? lastIndex : this.currentIndex - 1

        this.$_changeActiveTab(newIndex)
      }

      if (event.key === 'ArrowDown' && this.isVertical) {
        const newIndex =
          this.currentIndex !== lastIndex ? this.currentIndex + 1 : 0

        this.$_changeActiveTab(newIndex)
      }

      if (event.key === 'Home') {
        this.$_changeActiveTab(0)
      }

      if (event.key === 'End') {
        this.$_changeActiveTab(lastIndex)
      }

      this.$emit('keydown', event)
    },
  },

  render(h) {
    const children = this.$slots.default.filter((e) => e.tag) || []

    const renderAddButton = () => {
      return h(SbTabAdd, {
        on: {
          click: () => this.$_createNewTab(h),
        },
      })
    }

    const processChilren = () => {
      return children.map((element) => {
        const elementProps = element.componentOptions.propsData
        const elementId = elementProps.name

        element.componentOptions.propsData = {
          ...element.componentOptions.propsData,
          activate: elementId === this.value,
        }

        element.componentOptions.listeners = {
          ...element.componentOptions.listeners,
          'activate-tab': this.handleActiveTab,
          keydown: this.handleKeyDown,
        }

        return element
      })
    }

    return h(
      'ul',
      {
        staticClass: 'sb-tabs',
        class: {
          'sb-tabs--container': !this.isVertical && this.type === 'container',
          'sb-tabs--vertical': this.isVertical,
        },
        attrs: {
          ...this.$attrs,
          role: 'tablist',
        },
      },
      [
        processChilren(),
        ...this.additionalTabs,
        this.enableAddButton && renderAddButton(),
      ]
    )
  },
}

export { SbTabs, SbTab }

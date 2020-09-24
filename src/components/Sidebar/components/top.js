import SbAvatar from '../../Avatar'
import SbLink from '../../Link'

const logoSvgPath = `
  <g fill="none" fill-rule="evenodd">
    <path fill="#FFF" d="M4 4h20v20H4z"/>
    <g fill-rule="nonzero">
      <path d="M45.40362456 23.0931095c-1.13956016 0-2.24656145-.1630427-3.35356274-.5217366-1.03883088-.3371297-1.99357319-.8930593-2.80006209-1.6304269l1.46514877-2.4782489c.81397154.5543451 1.59538421.9782561 2.37679689 1.3043415.74885381.3260854 1.49770763.4565195 2.21400258.4565195.52094179 0 .94420699-.0978256 1.23723674-.2934768.29302975-.1630427.4232652-.4565195.4232652-.8152135 0-.3260853-.16279431-.6521707-.55350065-.8478219-.61191166-.2937123-1.25686445-.5126739-1.92097283-.6521708l-2.2791203-.7499964c-.61861837-.2608683-1.10700129-.5217366-1.49770763-.8152134-.39070634-.2608683-.6837361-.6195622-.8465304-.9782562-.17721275-.4116696-.26595864-.856076-.2604709-1.3043415-.01905942-1.28355469.54365219-2.50662184 1.5302665-3.32607084.45582406-.39130245 1.04188357-.6847793 1.6930608-.91303906.65117723-.22825977 1.36747218-.32608538 2.116326-.32608538 1.0093247 0 1.95353169.13043415 2.83262095.39130245.87908926.29347685 1.72561965.78260491 2.53959115 1.49999275l-1.59538417 2.44564034c-.63022576-.45158928-1.3069759-.83420854-2.01864941-1.14129882-.61861837-.26086831-1.17211902-.35869392-1.75817852-.35869392-.4232652 0-.81397154.06521707-1.1070013.2608683-.32558861.16304269-.45582406.45651953-.45582406.84782199 0 .39130245.16279431.65217079.48838293.84782199.32558861.1956512.97676584.3913024 1.8558551.6195622.81615201.2058852 1.62046825.4562568 2.40935575.7499964.65117723.2608683 1.17211898.5543451 1.59538418.847822.8004431.5903469 1.2428756 1.5504134 1.1721191 2.5434659 0 1.3369501-.488383 2.3804233-1.4977077 3.1630282-.97676582.7826049-2.27912028 1.1739074-4.00473994 1.1739074zm16.11663644-.9456476c-.5535006.2282597-1.2046779.4565195-1.9209728.6521707-.716295.1956513-1.4325899.3260854-2.1814437.3260854-.5209418 0-.9767659-.0652171-1.43259-.1956512-.4431817-.1294-.8538224-.3517066-1.2046778-.6521708-.3255886-.2608683-.5860595-.6521707-.7814127-1.0760817-.1953532-.4565196-.3255886-1.0108647-.3255886-1.6630355v-7.01083561h-1.6930608V9.46274062h1.7256196V5.19102216h4.0372989v4.23910993h2.7349443v3.0978111h-2.7349443v5.60866851c0 .423911.0976766.7499964.3255886.9782561.227912.1630427.5209418.2608683.8465304.2608683s.6511772-.0326085.944207-.1630426c.3255886-.0978257.6186183-.1956513.8465304-.3260854l.7814126 3.2608538h.0325589zm7.6187736.9456476c-1.03604.0181156-2.0653315-.1703215-3.0279741-.5543452-1.6943306-.6712816-3.0213439-2.0359187-3.6465925-3.7499818-.6396751-1.7025893-.6396751-3.5799939 0-5.28258318.6252486-1.7140631 1.9522619-3.07870028 3.6465925-3.74998186.8790892-.35869391 1.8884139-.55434514 3.0279741-.55434514 1.9819669-.09343624 3.9067137.68001701 5.2745356 2.11955496.6186183.61956222 1.0744424 1.3695586 1.400031 2.18477204.6664828 1.70886038.6664828 3.60633128 0 5.31519168-.6292241 1.692921-1.9410688 3.0422767-3.6140336 3.7173733-.9727832.3883046-2.0135731.5768198-3.060533.5543452zm-2.9302975-6.9130101c0 1.0434732.2604709 1.8912952.8139715 2.5108575.5860595.6521707 1.3023545.9782561 2.1488849.9782561.8178242.0158248 1.5977616-.3446955 2.116326-.9782561.2604709-.3260854.455824-.6521708.6186183-1.1086903.1627943-.423911.2279121-.9130391.2279121-1.4021672 0-1.0760817-.2930298-1.9239037-.8465304-2.5434659-.5535007-.65217078-1.2697956-.97826328-2.116326-.97826328-.8148378-.00184019-1.5890788.35604703-2.116326.97826328-.2604709.3260854-.488383.6521707-.6511773 1.1086903-.1468001.4634975-.2128817.9488355-.1953531 1.4347756zm20.6097593-3.22824522c-.9767658 0-1.888414.16304269-2.7023855.48912807-.7165531.24197215-1.3266655.72619515-1.7256197 1.36955855v8.0543089h-4.0698577V9.46274062h3.7442691v2.67390011c.4558241-.91303906 1.0418836-1.63042689 1.7907374-2.11955496.716295-.52173661 1.4651488-.78260491 2.2791203-.81521345h.4232652l.2604709.03260854v3.71737332zm1.7907374 11.90211632c.5662175.1971352 1.1590242.3070818 1.7581785.3260854.4883829 0 .8790893-.1630427 1.172119-.4891281.2604709-.3260854.4883829-.9782561.716295-1.8260781L87.1766439 9.46274062h4.2000931l3.0930919 9.88038698 2.7023855-9.88038698h3.8093868L95.8698599 25.0170132c-.8018212 2.6418906-3.4899564 4.2288933-6.1861837 3.6521563-.3255886-.0652171-.7162949-.1630427-1.0744424-.3260854v-3.4891136zm22.0097904-1.760762c-1.0093247 0-1.9209729-.1957503-2.6698267-.6522698-.7608413-.4185706-1.3917233-1.0391324-1.8232962-1.7934696v2.2173806h-3.5489159V4.21276602h4.1024165v7.43474664c.8905699-1.56078438 2.5688333-2.50154419 4.3628875-2.44564034.8465304 0 1.627943.16304269 2.344238.55434514.716295.32608538 1.3023545.84782199 1.8558551 1.46738421 1.6027051 2.22754769 2.0388079 5.09080533 1.172119 7.69561493-.3255886.847822-.7814127 1.5978184-1.3349133 2.2173806-1.1432041 1.2552627-2.7641832 1.9662637-4.460564 1.9566113zm-1.1395602-3.4239886c1.3216378.0027818 2.4990284-.8357511 2.9302976-2.0869533.4774122-1.313607.2434784-2.7810066-.6186184-3.880416-.5090057-.67131655-1.3073741-1.05899483-2.1488849-1.04347326-.6186183 0-1.2046779.22825976-1.7581785.65217076-.5209418.4565195-.944207 1.0108647-1.2372367 1.695644v2.8043342c.5254358 1.1094552 1.6391374 1.8192557 2.8651798 1.8260782l-.0325589.0326154zm9.3769521-15.45645388h4.0698577V18.0713946c0 1.0434732.4232652 1.5326013 1.3023545 1.5326013.464793.0013552.9229379-.1105579 1.3349133-.3260854l.5535006 3.0325941c-1.1403324.5001957-2.3692334.7663094-3.6140336.7826049-1.172119 0-2.0837671-.3260854-2.7023855-.9130391-.6511772-.6521707-.9767658-1.4999927-.9767658-2.6739001V4.21276602h.0325588zm14.9445175 18.88034348c-1.0360399.0181156-2.0653314-.1703215-3.0279742-.5543452-1.7043424-.6671473-3.0430212-2.0315981-3.6791513-3.7499818-.941515-2.5628869-.4177035-5.43575399 1.3674722-7.49996375.6511772-.65217076 1.3674722-1.14129883 2.2791203-1.53260129.8790892-.35869391 1.888414-.55434514 3.0279741-.55434514 1.981967-.09343624 3.9067137.68001701 5.2745356 2.11955496.6511777.61956222 1.0744427 1.3695586 1.4000307 2.18477204.978685 2.55955518.451298 5.45202748-1.3674719 7.49996368-.6186183.6521708-1.3674722 1.1739074-2.2791203 1.5326013-.9626428.3840237-1.9919342.5724608-3.0279741.5543452h.0325589zm-2.9628564-6.9130101c0 1.0434732.2604709 1.8912952.8139715 2.5108575.5860595.6521707 1.3023545.9782561 2.1488849.9782561.8168136.0110287 1.5947731-.3485775 2.116326-.9782561.2604709-.3260854.455824-.6521708.6186183-1.1086903.1627943-.423911.2279121-.9130391.2279121-1.4021672 0-1.0760817-.2930298-1.9239037-.8465304-2.5434659-.5535007-.65217078-1.2697956-.97826328-2.116326-.97826328-.814838-.00184019-1.5890789.35604703-2.116326.97826328-.2604709.3260854-.488383.6521707-.6511773 1.1086903-.1627943.4565195-.1953531.9130464-.1953531 1.4347756zm21.1307008 6.6847503l-3.483798-5.4130173-1.43259 1.4999928v3.9130245h-4.069857V4.21276602h4.069857V15.0061921l4.525682-5.54345148h4.330329l-4.818712 5.77171118 5.209418 7.6303979h-4.330329z" fill="#FFF"/>
      <g fill="#0AB3AF">
        <path d="M16.2784045 15.212766H9.8125v3.0425531h6.3104741c.373033 0 .7149798-.1521276.9947546-.3955319.2486886-.2434042.404119-.6085106.404119-1.0648936.009016-.391555-.1108685-.7755674-.3419469-1.0953191-.2486886-.3042554-.5284633-.4868085-.9014963-.4868085zm.2176026-3.6814894c.2797747-.1825532.404119-.5780851.404119-1.0953192 0-.45638293-.1243443-.79106378-.3419469-1.00404251-.2176025-.18255319-.4973772-.30425532-.808238-.30425532H9.8125v2.73829783h5.8130968c.3108608 0 .6217216-.1521276.8704103-.3346808z"/>
        <path d="M26.7774947 0H1.45179188C.64524083 0 0 .64327485 0 1.41520468V26.6959064c0 .7719299.64524083 1.254386 1.41952984 1.254386h3.74239684V33l4.64573401-5.0175439H26.7774947c.774289 0 1.2582196-.4824561 1.2582196-1.2865497V1.44736842c0-.77192982-.4839306-1.41520468-1.2904817-1.41520468L26.7774947 0zm-4.2585896 20.4883041c-.3226204.5789474-.806551 1.0614035-1.3872678 1.4152047-.6129787.3859649-1.2904816.7397661-2.0647706.9005848-.774289.1929824-1.6131021.3538011-2.4841772.3538011H5.16192668V5.14619883H18.1312675c.6452408 0 1.1936955.12865497 1.7098882.41812866.4839306.25730994.9355992.61111111 1.2904816 1.02923976.7227806.87871593 1.1112382 1.98358613 1.0969095 3.11988304 0 .83625731-.2258343 1.64035091-.6452409 2.41228071-.4348192.7764365-1.1155718 1.3872471-1.9357225 1.7368421 1.0323854.2894737 1.8389364.8040936 2.4519152 1.5438596.5807168.7719299.8710751 1.7690059.8710751 3.0233919 0 .8040935-.1613102 1.4795321-.4839306 2.0584795h.032262z"/>
      </g>
    </g>
  </g>
`

/**
 * SbSidebarLogo component
 *
 * Render the Storyblok Logo
 */
const SbSidebarLogo = {
  name: 'SbSidebarLogo',

  functional: true,

  props: {
    minimize: {
      type: Boolean,
      default: false
    }
  },

  render (h, { props }) {
    return h('svg', {
      staticClass: 'sb-sidebar-logo',
      attrs: {
        role: 'img',
        'aria-label': 'Storyblok Official Logo',
        viewBox: props.minimize ? '0 0 29 33' : '0 0 158 33'
      },
      domProps: {
        innerHTML: logoSvgPath
      }
    })
  }
}

const SbSidebarUserDropDown = {
  name: 'SbSidebarUserDropDown',

  props: {
    email: {
      type: String
    },
    name: {
      type: String
    },
    active: {
      type: Boolean,
      default: false
    }
  },

  render (h) {
    const renderUserInfo = () => {
      return h('div', {
        staticClass: 'sb-sidebar-user-dropdown__top'
      }, [
        h('p', {
          staticClass: 'sb-sidebar-user-dropdown__top-name'
        }, this.name),
        h('p', {
          staticClass: 'sb-sidebar-user-dropdown__top-email'
        }, this.email)
      ])
    }

    const links = [
      {
        label: 'Account',
        href: '#'
      },
      {
        label: 'Security Settings',
        href: '#'
      },
      {
        label: 'Personal access tokens',
        href: '#'
      },
      {
        label: 'Privacy',
        href: '#'
      },
      {
        label: 'Sign Out',
        href: '#'
      }
    ]

    const renderUserList = () => {
      return h('ul', {
        attrs: {
          role: 'navigation'
        },
        staticClass: 'sb-sidebar-user-dropdown__list'
      }, links.map(link => {
        return h('li', [
          h(SbLink, {
            props: {
              ...link
            }
          })
        ])
      }))
    }

    return h('div', {
      attrs: {
        'data-testid': 'sidebar-user-dropdown',
        tabindex: 0,
        'aria-hidden': !this.active + ''
      },
      staticClass: 'sb-sidebar-user-dropdown'
    }, [
      renderUserInfo(),
      renderUserList()
    ])
  }
}

/**
 * SbSidebarUser component
 *
 * Render the Storyblok User information with a Context Menu to actions
 */
const SbSidebarUser = {
  name: 'SbSidebarUser',

  props: {
    src: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },

  data: () => ({
    isDropDownActive: false
  }),

  methods: {
    toggleDropdownState (event) {
      if (event.key === 'Tab') {
        return
      }

      this.isDropDownActive = !this.isDropDownActive
    }
  },

  render (h) {
    const { name, email, src } = this

    return h('div', {
      staticClass: 'sb-sidebar-user'
    }, [
      h(SbAvatar, {
        attrs: {
          tabindex: 0,
          'aria-label': `Open actions to current user ${name}, email ${email}`,
          'aria-expanded': this.isDropDownActive + ''
        },
        props: {
          src,
          name
        },
        on: {
          keydown: this.toggleDropdownState,
          click: this.toggleDropdownState
        }
      }),
      h(SbSidebarUserDropDown, {
        ref: 'userDropdown',
        props: {
          email,
          name,
          active: this.isDropDownActive
        }
      })
    ])
  }
}

export {
  SbSidebarLogo,
  SbSidebarUser
}

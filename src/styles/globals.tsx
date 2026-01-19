import { css, Global } from '@emotion/react'
import { theme } from './theme'
import {
	colorUtils,
	flexboxUtils,
	mediaUtils,
	spacingUtils,
	textUtils,
} from './utilities'

export const GlobalStyles = () => (
	<Global
		styles={css`
      @font-face {
        font-family: "Manrope";
        src: url("/fonts/Manrope.ttf") format("truetype");
        src: url("/fonts/Manrope.ttf") format("truetype") tech('variations');
        font-weight: 400 500 600 700;
      }

      :root {
        /* Responsive Grid */
        --grid-container: ${theme.grid.container.sm};
        --grid-gutter: ${theme.grid.gutter.sm};

        @media (min-width: ${theme.breakpoints.md}) {
          --grid-container: ${theme.grid.container.md};
          --grid-gutter: ${theme.grid.gutter.md};
        }

        @media (min-width: ${theme.breakpoints.lg}) {
          --grid-container: ${theme.grid.container.lg};
          --grid-gutter: ${theme.grid.gutter.lg};
        }

        @media (min-width: ${theme.breakpoints.xl}) {
          --grid-container: ${theme.grid.container.xl};
          --grid-gutter: ${theme.grid.gutter.xl};
        }

        @media (min-width: ${theme.breakpoints['2xl']}) {
          --grid-container: ${theme.grid.container['2xl']};
          --grid-gutter: ${theme.grid.gutter['2xl']};
        }
  
        /* Border Radius */
        --radius-xs: ${theme.borderRadius.xs};
        --radius-sm: ${theme.borderRadius.sm};
        --radius-md: ${theme.borderRadius.md};
        --radius-lg: ${theme.borderRadius.lg};
        --radius-full: ${theme.borderRadius.full};
  
        /* Font Family */
        --font-family: ${theme.font.family};
  
        /* Font Weights */
        --font-light: ${theme.font.weight.light};
        --font-normal: ${theme.font.weight.normal};
        --font-medium: ${theme.font.weight.medium};
        --font-semibold: ${theme.font.weight.semibold};
        --font-bold: ${theme.font.weight.bold};
  
        /* Body sizes */
        --text-xs: ${theme.font.sizes.xs};
        --text-sm: ${theme.font.sizes.sm};
        --text-md: ${theme.font.sizes.md};
        --text-lg: ${theme.font.sizes.lg};

        /* Heading sizes */
        --heading-sm: ${theme.font.sizes['2xl']};
        --heading-md: ${theme.font.sizes['3xl']};
        --heading-lg: ${theme.font.sizes['4xl']};

        /* Line heights */
        --text-xs_line-height: ${theme.font.lineHeight.xs};
        --text-sm_line-height: ${theme.font.lineHeight.sm};
        --text-md_line-height: ${theme.font.lineHeight.md};
        --text-lg_line-height: ${theme.font.lineHeight.lg};
        --text-xl_line-height: ${theme.font.lineHeight.xl};
        --heading-sm_line-height: ${theme.font.lineHeight['2xl']};
        --heading-md_line-height: ${theme.font.lineHeight['3xl']};
        --heading-lg_line-height: ${theme.font.lineHeight['4xl']};

        /* Spacings */
        --spacing-0: ${theme.spacings[0]};
        --spacing-0_5: ${theme.spacings['0.5']};
        --spacing-1: ${theme.spacings[1]};
        --spacing-1_5: ${theme.spacings['1.5']};
        --spacing-2: ${theme.spacings[2]};
        --spacing-3: ${theme.spacings[3]};
        --spacing-4: ${theme.spacings[4]};
        --spacing-5: ${theme.spacings[5]};
        --spacing-6: ${theme.spacings[6]};
        --spacing-8: ${theme.spacings[8]};
        --spacing-10: ${theme.spacings[10]};
        --spacing-12: ${theme.spacings[12]};
        --spacing-16: ${theme.spacings[16]};
        --spacing-20: ${theme.spacings[20]};
        --spacing-24: ${theme.spacings['24']};
        --spacing-32: ${theme.spacings['32']};
        --spacing-40: ${theme.spacings['40']};
        --spacing-64: ${theme.spacings['64']};
        --spacing-80: ${theme.spacings['80']};

        /* Layers */
        --layer-base: ${theme.layers.base};
        --layer-menu: ${theme.layers.menu};
        --layer-overlay: ${theme.layers.overlay};
        --layer-modal: ${theme.layers.modal};
        --layer-always-on-top: ${theme.layers.alwaysOnTop};

        /* Transitions */
        --transition-default: ${theme.transition.default};
        --transition-fast: ${theme.transition.fast};


        /* On colors */
        --surface-transparent: ${theme.colors.charcoal100};
        --surface-dark: ${theme.colors.charcoal100};
        --surface-dark_hover: ${theme.colors.charcoal90};
        --surface-light: ${theme.colors.pureWhite};
        --text-on-dark: ${theme.colors.pureWhite};
        --text-on-light: ${theme.colors.charcoal100};

        /* Pokemon type colors */
        --color-grass: ${theme.colors.grass};
        --color-poison: ${theme.colors.poison};
        --color-fire: ${theme.colors.fire};
        --color-water: ${theme.colors.water};
        --color-flying: ${theme.colors.flying};
        --color-bug: ${theme.colors.bug};
        --color-normal: ${theme.colors.normal};
        --color-electric: ${theme.colors.electric};
        --color-ground: ${theme.colors.ground};
        --color-fairy: ${theme.colors.fairy};
        --color-fighting: ${theme.colors.fighting};
        --color-psychic: ${theme.colors.psychic};
        --color-rock: ${theme.colors.rock};
        --color-steel: ${theme.colors.steel};
        --color-ice: ${theme.colors.ice};
        --color-ghost: ${theme.colors.ghost};
        --color-dragon: ${theme.colors.dragon};
        --color-dark: ${theme.colors.dark};

        /* Effects */
        --ring: ${theme.effects.ring};
      }

      :root[data-theme='light'] {
        --bg-primary: ${theme.colors.pureWhite};
        --bg-secondary: ${theme.colors.charcoal10};
        --bg-tertiary: ${theme.colors.charcoal5};

        --btn-primary-bg: ${theme.colors.charcoal100};
        --btn-primary-bg_hover: ${theme.colors.charcoal80};
        --btn-primary-bg_disabled: ${theme.colors.charcoal20};
        --btn-primary-text: ${theme.colors.pureWhite};
        --btn-primary-text_disabled: ${theme.colors.charcoal50};

        --btn-secondary-bg: ${theme.colors.transparent};
        --btn-secondary-bg_hover: ${theme.colors.charcoal5};
        --btn-secondary-text: ${theme.colors.charcoal100};
        --btn-secondary-text_disabled: ${theme.colors.charcoal20};
        --btn-secondary-border: ${theme.colors.charcoal100};
        --btn-secondary-border_disabled: ${theme.colors.charcoal20};

        --text-primary: ${theme.colors.charcoal100};
        --text-primary_on-color: ${theme.colors.pureWhite};
        --text-secondary: ${theme.colors.charcoal70};
        --text-tertiary: ${theme.colors.charcoal50};

        --border-primary: ${theme.colors.charcoal5};
        --border-primary_hover: ${theme.colors.charcoal10};
        --border-secondary: ${theme.colors.charcoal20};
        --border-secondary_hover: ${theme.colors.charcoal30};

        /* Effects */
        --shadow-lg: ${theme.effects.shadow.lg.light};
        --shadow-md: ${theme.effects.shadow.md.light};
      }

      :root[data-theme='dark'] {
        --bg-primary: ${theme.colors.charcoal100};
        --bg-secondary: ${theme.colors.charcoal90};
        --bg-tertiary: ${theme.colors.charcoal80};

        --btn-primary-bg: ${theme.colors.pureWhite};
        --btn-primary-bg_hover: ${theme.colors.charcoal20};
        --btn-primary-bg_disabled: ${theme.colors.charcoal70};
        --btn-primary-text: ${theme.colors.charcoal100};
        --btn-primary-text_disabled: ${theme.colors.charcoal50};

        --btn-secondary-bg: ${theme.colors.transparent};
        --btn-secondary-bg_hover: ${theme.colors.charcoal80};
        --btn-secondary-text: ${theme.colors.pureWhite};
        --btn-secondary-text_disabled: ${theme.colors.charcoal70};
        --btn-secondary-border: ${theme.colors.pureWhite};
        --btn-secondary-border_disabled: ${theme.colors.charcoal70};

        --text-primary: ${theme.colors.pureWhite};
        --text-primary_on-color: ${theme.colors.charcoal100};
        --text-secondary: ${theme.colors.charcoal50};
        --text-tertiary: ${theme.colors.charcoal70};

        --border-primary: ${theme.colors.charcoal90};
        --border-primary_hover: ${theme.colors.charcoal80};
        --border-secondary: ${theme.colors.charcoal70};
        --border-secondary_hover: ${theme.colors.charcoal50};

        /* Effects */
        --shadow-lg: ${theme.effects.shadow.lg.dark};
        --shadow-md: ${theme.effects.shadow.md.dark};
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        &::before,
        &::after {
          box-sizing: inherit;
        }
      }

      html {
        font-size: 62.5%; // 1rem = 10px == 10/16px = 62.5% (1.4rem == 14px)
      }

      body {
        font-family: var(--font-family);
        font-size: var(--text-md);
        background-color: var(--bg-primary);
        color: var(--text-primary);
        transition: background-color var(--transition-default), color var(--transition-default);
        font-variant-numeric: slashed-zero;
        -webkit-font-smoothing: antialiased;
      }

      /* Accessibility: Focus styles */
      *:focus-visible {
        outline: var(--effect-ring-width) solid var(--effect-ring-color);
        outline-offset: var(--effect-ring-offset);
        border-radius: var(--radius-sm);
      }

      button:focus-visible,
      a:focus-visible {
        outline: var(--effect-ring-width) solid var(--effect-ring-color);
        outline-offset: var(--effect-ring-offset);
      }

      /* Skip link positioning */
      .app-layout {
        position: relative;
      }

      /* Utility Classes */
      ${flexboxUtils}
      ${mediaUtils}
      ${spacingUtils}
      ${colorUtils}
      ${textUtils}
    `}
	/>
)

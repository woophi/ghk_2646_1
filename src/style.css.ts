import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const box = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  borderRadius: '24px',
  border: '2px solid #F8F8F8',
  overflow: 'hidden',
  textAlign: 'center',
  paddingBottom: '1rem',
});

const row = style({
  borderRadius: '1rem',
  backgroundColor: '#F8F8F8',
  padding: '12px 16px',
});

const switchItem = style({});

globalStyle(`${switchItem} > span > span:first-child`, {
  fontWeight: 500,
});

const slider = style({
  borderRadius: '1rem !important',
  marginTop: '1rem',
});

const slid = style({
  width: 'calc(100% - var(--slider-input-progress-margin-horizontal) * 2) !important',
});

const swSlide = recipe({
  base: {
    minWidth: '58px',
    maxWidth: 'max-content',
    height: '32px',
    backgroundColor: '#F8F8F8',
    padding: '4px 12px',
    borderRadius: '1rem',
    fontSize: '14px',
    lineHeight: '24px',
    textAlign: 'center',
    color: '#6F6F6F',
    transition: 'all .25s ease',
  },
  variants: {
    selected: {
      true: {
        backgroundColor: '#E93B3C',
        color: '#FFF',
      },
    },
  },
});

const btnContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'left',
  gap: '1rem',
});
const btn = style({
  borderRadius: '24px',
  padding: '1rem',
});

export const appSt = {
  bottomBtn,
  container,
  box,
  row,
  switchItem,
  slider,
  slid,
  swSlide,
  btn,
  btnContainer,
};

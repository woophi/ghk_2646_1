import { Typography } from '@alfalab/core-components/typography';
import rocket from '../assets/rocket.png';
import { thxSt } from './style.css';
import { useTimeout } from './useTimeout';

export const ThxLayout = () => {
  useTimeout(() => window.location.replace('alfabank://investments/open_brokerage_account'), 5000);
  return (
    <>
      <div className={thxSt.container}>
        <img src={rocket} width={135} className={thxSt.rocket} />
        <Typography.TitleResponsive font="system" tag="h1" view="large" defaultMargins weight="bold">
          Спасибо, мы записали ваш ответ
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Мы увидели, что вам было бы интересно наше предложение. Скоро вы сможете им воспользоваться.
        </Typography.Text>
      </div>
    </>
  );
};

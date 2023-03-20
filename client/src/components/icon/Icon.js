import sprite from '../../img/sprite.svg'

export const Icon = (props) => (
    <svg className={`icon icon-${props.icon}`}>
        <use xlinkHref={`${sprite}#icon-${props.icon}`} />
    </svg>
);
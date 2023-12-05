import cl from 'classnames';
import { IconName, ComponentProps } from '../types/types';
import styles from '../../../css_modules/gallery/button.module.css'
import Icon from '../icon';

interface ButtonProps extends ComponentProps {
    onClick: () => void;
    iconName?: IconName;
    disabled?: boolean;
  
}

const Button =({
    iconName,
    children,
    onClick,
    className,
    disabled = false
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={cl(`${styles.button} ${className}`)}
            disabled={disabled}
        >
            {iconName && <Icon name={iconName} />}
            {children}
        </button>
    )
} 
export default Button;


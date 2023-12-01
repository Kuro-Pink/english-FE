import classNames from 'classnames/bind';
import styles from './Sitebar.module.scss';

const cx = classNames.bind(styles);

function Sitebar() {
    return (
        <aside className={cx('wrapper')}>
            <h1>Sitebar</h1>
        </aside>
    );
}

export default Sitebar;

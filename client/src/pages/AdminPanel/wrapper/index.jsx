import { MainMenuItem } from '@pages/MainMenu/ui/MainMenuItem'
import styles from './styles.module.css'
import { TitleWrapper } from '@components/index'

const TABS = {
	products: '/adminpanel/products',
	tasks: '/adminpanel/tasks',
	users: '/adminpanel/users'
}

const AdminPanelWrapper = ({ children }) => {
	return (
		<div className={styles.adminPanel}>
			<aside className={styles.adminPanel__sidebar}>
				<TitleWrapper customTitle="Админ-панель" />
				<div className={styles.adminPanel__links}>
					<MainMenuItem
						link={TABS.products}
						label="Товары в магазине"
						icon="fi fi-sr-shop"
					/>
					<MainMenuItem
						link={TABS.tasks}
						label="Ежедневные задания"
						icon="fi fi-sr-star"
					/>
					<MainMenuItem
						link={TABS.tasks}
						label="Места"
						icon="fi fi-sr-marker"
					/>
					<MainMenuItem
						link={TABS.tasks}
						label="Отзывы"
						icon="fi fi-sr-comment-heart"
					/>
					<MainMenuItem
						link={TABS.users}
						label="Пользователи"
						icon="fi fi-sr-user"
					/>


					<MainMenuItem
						link={'/logout'}
						label="Выйти"
						icon="fi fi-sr-sign-out-alt"
					/>
				</div>
			</aside>
			<main className={styles.adminPanel__content}>{children}</main>
		</div>
	)
}

export default AdminPanelWrapper

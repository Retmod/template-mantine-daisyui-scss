import { Button, Divider, Menu, Text } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { Prism } from '@mantine/prism';
import Base from '../components/Base';
import { IconQuestionMark } from '@tabler/icons';
import Link from '../components/Link';

const notificationCode = `
// code for showing notifications
showNotification({
	message: 'This is a notification!',
});
`;

export default function MantineDemo() {
	return (
		<Base>
			<>
				<h1>Mantine Demo</h1>
				<h3 className='opacity-50'>
					Some Mantine Components to proof Mantine is included in this stack
				</h3>
				<Divider className='my-4' />
				<Button
					variant='outline'
					onClick={() => {
						showNotification({
							message: 'This is a notification!',
						});
					}}
				>
					Notifications are cool.
				</Button>
				<p className='opacity-50'>Button with notifications</p>
				<br />

				<Prism
					language='javascript'
					children={notificationCode}
					withLineNumbers
				/>
				<p className='opacity-50'>
					Mantine Prism Code Highlight with Notification Code
				</p>
				<br />

				<Menu shadow='md' width={200}>
					<Menu.Target>
						<Button variant='outline'>Menu</Button>
					</Menu.Target>

					<Menu.Dropdown>
						<Menu.Label>This is a Mantine Menu</Menu.Label>
						<Menu.Item icon={<IconQuestionMark />}>
							And this is a Menu Item
						</Menu.Item>
					</Menu.Dropdown>
				</Menu>
				<p className='opacity-50'>Mantine Menu</p>
				<br />

				<Link href='/'>
					<Button variant='outline' color='orange'>
						Bring me back!
					</Button>
				</Link>
			</>
		</Base>
	);
}

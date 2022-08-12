import Router from './router';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

export default function Wrappers() {
	return (
		<div className='text-base-content bg-base-300'>
			<MantineProvider theme={{ primaryColor: 'cyan', colorScheme: 'dark' }}>
				<NotificationsProvider>
					<Router />
				</NotificationsProvider>
			</MantineProvider>
		</div>
	);
}

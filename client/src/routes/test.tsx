import { Divider } from '@mantine/core';
import Base from '../components/Base';
import Link from '../components/Link';

export default function Test() {
	return (
		<Base>
			<>
				<h1>This is another page, used for testing page transitions.</h1>
				<h3 className='opacity-50'>
					In fact, this preset also includes framer motion
				</h3>
				<Divider className='my-4' />
				<Link href='/' className='btn btn-wide btn-outline btn-accent mr-2'>
					Go back
				</Link>
				<Link
					href='/mantine-demo'
					className='btn btn-wide btn-outline btn-secondary'
				>
					View Mantine stuff
				</Link>
			</>
		</Base>
	);
}

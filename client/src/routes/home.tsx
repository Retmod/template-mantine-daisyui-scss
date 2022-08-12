import { Divider } from '@mantine/core';
import Base from '../components/Base';
import Link from '../components/Link';

export default function Home() {
	return (
		<Base>
			<>
				<h1>Retmod Template</h1>
				<h3 className='opacity-50'>with Daisyui, Mantine and SCSS</h3>
				<Divider className='my-4' />
				<p>This is a Retmod Project!</p>
				<br />
				<p className='btn btn-wide btn-info btn-outline'>
					This is a DaisyUI button!
				</p>
				<br />
				<br />
				<Link href='/test' className='btn btn-wide btn-outline btn-accent'>
					This is a page transition button
				</Link>
			</>
		</Base>
	);
}

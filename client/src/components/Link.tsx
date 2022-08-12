import { useNavigate } from 'react-router-dom';

type LinkProps = React.HTMLAttributes<HTMLAnchorElement> & { href: string };

export default function Link(props: LinkProps) {
	const navigate = useNavigate();

	return (
		<a
			{...props}
			onClick={(e) => {
				if (props.onClick) props.onClick(e);
				else {
					e.preventDefault();
					navigate(props.href);
				}
			}}
		>
			<p>{props.children}</p>
		</a>
	);
}

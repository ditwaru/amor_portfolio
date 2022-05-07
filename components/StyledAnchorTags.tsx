interface Props {
    href: string;
    text: string;
}
const StyledAnchorTags = ({href, text}: Props) => <a href={href} target='_blank' rel="noreferrer" className='w-full max-w-sm bg-white border rounded-lg px-3 py-2 lg:hover:scale-110 duration-150 font-bitter font-semibold'>{text}</a>

export default StyledAnchorTags;
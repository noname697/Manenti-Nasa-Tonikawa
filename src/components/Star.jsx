const Star = ({top, left, size, delay}) => {
    return (
        <span className="absolute rounded-full bg-white" style={{top, left, width: size, height: size, animation: `twinkle 3s ease-in-out ${delay}s infinite`}} />
    )
}

export default Star
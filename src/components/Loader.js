const Loader = (props) => (
  <svg
    style={{
      margin: '3rem auto',
      background: 'transparent'
    }}
    width={200}
    height={200}
    viewBox='0 0 100 100'
    preserveAspectRatio='xMidYMid'
    display='block'
    {...props}>
    <circle cx={50} cy={50} fill='none' stroke='#e15b64' strokeWidth={10} r={35} strokeDasharray='164.93361431346415 56.97787143782138'>
      <animateTransform attributeName='transform' type='rotate' repeatCount='indefinite' dur='1s' values='0 50 50;360 50 50' keyTimes='0;1' />
    </circle>
  </svg>
)

export default Loader

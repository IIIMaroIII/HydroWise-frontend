const WaterItem = ({item}) => {
  return (
    <li>
          <div >
            <p> {item.volume}</p>
            <p>{item.date}</p>
      </div>
      <button type="button" onClick={() => console.log('Open water modal')}>Change</button>
      <button type="button"  onClick={() => console.log('Open delete water modal')}>Delete</button>
    </li>
  )
}

export default WaterItem
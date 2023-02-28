import {Bars} from "react-loader-spinner";
// import { Plane } from '@bit/mhnpd.react-loader-spinner.plane';
const LoaderComponent = ({visiblity}) => {
    return (
      <div style={{
        display: 'flex',
        vh:100,
        justifyContent:"center",
        alignItems:"center"
      }}>
        <Bars
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          visible={visiblity}
        />
      </div>
    )
  }

export default LoaderComponent;
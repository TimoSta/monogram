import React from 'react'
import PropTypes from 'prop-types'
import Canvas from './Canvas'

class Printer extends React.Component {
  componentDidMount() {
    if (this.print) {
      const data = this.print()
      const blob = new Blob([data], {type: 'image/svg+xml'})
      const filename = 'export.svg'

      if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename)
      } else {
        var elem = window.document.createElement('a')
        elem.href = window.URL.createObjectURL(blob)
        elem.download = filename
        document.body.appendChild(elem)
        elem.click()
        document.body.removeChild(elem)
      }
    } else console.log('Not ready to render yet.')
    this.props.onPrintDone()
  }

  render() {
    const {shapes, connections, shape, theme} = this.props

    return (
      <Canvas
        connections={connections}
        shapes={shapes}
        theme={theme}
        shape={shape}
        printCallback={print => (this.print = print)}
        printMode
      />
    )
  }
}

Printer.propTypes = {
  connections: PropTypes.arrayOf(PropTypes.object).isRequired,
  onPrintDone: PropTypes.func.isRequired,
  shapes: PropTypes.arrayOf(PropTypes.object).isRequired,
  theme: PropTypes.object.isRequired
}

export default Printer

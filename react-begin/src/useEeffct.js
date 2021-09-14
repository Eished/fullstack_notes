import ReactDOM from 'react-dom'
import React, { useState, useEffect, useCallback, useRef } from 'react'
import Brilliant, { createFrom, EditorFunction } from 'brilliant-editor'
import 'brilliant-editor/dist/index.css'

class Welcome extends React.Component {
  componentDidMount() {
    console.log('0 Welcome mount')
  }
  componentDidUpdate() {
    console.log('0 Welcome Update')
  }
  componentWillUnmount() {
    console.log('0 Welcome unmount')
  }
  render() {
    return (
      <h1>
        Hello, {this.props.name}, {this.props.mate}
      </h1>
    )
  }
}

const MyEditor = () => {
  useEffect(() => {
    console.log('2 MyEditor mount!')
    return () => {
      console.log('2 MyEditor unmount!')
    }
  }, [])
  const [editorState, setEditorState] = useState(() => createFrom(`<h1>Brilliant Editor</h1>`, 'HTML'))

  const editorFC = useRef()

  const outValue = () => {
    const editor = editorFC.current
    if (editor) {
      // console.log(editorState) // `EditorState`
      console.log(editor.getMarkdownValue()) // `Markdown`
      // console.log(editor.getRawValue()) // `Raw`
      // console.log(editor.getHtmlValue()) // `HTML`
    }
  }
  return (
    <div>
      <Brilliant editorRef={editorFC} value={editorState} />
      <button onClick={outValue}>输出数据</button>
    </div>
  )
}

function MeasureExample() {
  const [rect, ref] = useClientRect()
  useEffect(() => {
    console.log('1 MeasureExample mount!')
    return () => {
      console.log('1 MeasureExample update/unmount!')
    }
  }, [rect])
  return (
    <>
      <h1 ref={ref}>Hello, world</h1>
      {rect !== null && <h2>The above header is {Math.round(rect.height)}px tall</h2>}
    </>
  )
}

function useClientRect() {
  const [rect, setRect] = useState(null)
  const ref = useCallback((node) => {
    if (node !== null) {
      setRect(node.getBoundingClientRect())
    }
  }, [])
  return [rect, ref]
}

const MyComponent = () => {
  let [state, setState] = useState(false)
  useEffect(() => {
    console.log('3 MyComponent mount!')
    return () => {
      console.log('3 MyComponent update/unmount!')
    }
  }, [state])
  return (
    <div>
      <Welcome name="sheng" mate="dao" />
      {(() => {
        if (!state) {
          return (
            <div>
              <MeasureExample />
            </div>
          )
        }
      })()}
      <MyEditor />
      <button
        onClick={() => {
          setState((state = true))
        }}
      >
        close
      </button>
    </div>
  )
}

ReactDOM.render(<MyComponent />, document.getElementById('root'))

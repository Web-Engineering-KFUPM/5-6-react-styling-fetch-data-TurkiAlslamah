import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

function SearchBar({ onSearch }) {
  return (
    <div className="mb-4">
      <InputGroup>
        <InputGroup.Text>🔍</InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Search users by name..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </InputGroup>
    </div>
  )
}

export default SearchBar

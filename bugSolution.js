```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldIncrement, setShouldIncrement] = useState(false);

  useEffect(() => {
    if (shouldIncrement) {
      setCount(count + 1);
      setShouldIncrement(false);
    }
  }, [count, shouldIncrement]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setShouldIncrement(true)}>Increment</button>
    </div>
  );
}
```
# count-lines
Takes a Java source file and outputs the number of lines in it excluding comments and whitespace

## Example usage

`> node index.js example\3-lines.java`

outputs:
```javascript
[ 'public interface Dave {',
  '    int countLines(File inFile); ',
  '}' ]


3 lines after stripping whitespace and comments
```

`> node index.js example\5-lines.java`

outputs:
```javascript
[ 'public class Hello {',
  '    public static final void main(String [] args) { ',
  '        System.out.println("Hello/*");',
  '    }',
  '}' ]


5 lines after stripping whitespace and comments
```

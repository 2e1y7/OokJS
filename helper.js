var _ = require('lodash');

function emitProgram (body) {
    const flatten = _.flattenDeep(body)
    return {
      "type": "Program",
      "body": [
        {
          "type": "VariableDeclaration",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "name": "pointer"
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0"
              }
            }
          ],
          "kind": "let"
        },
        {
          "type": "VariableDeclaration",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "name": "memory"
              },
              "init": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "Array"
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 40000,
                        "raw": "40000"
                      }
                    ]
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "fill"
                  }
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            }
          ],
          "kind": "let"
        },
        {
          "type": "VariableDeclaration",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "name": "register"
              },
              "init": {
                "type": "Literal",
                "value": null,
                "raw": "null"
              }
            }
          ],
          "kind": "let"
        },
        ...flatten
      ],
      "sourceType": "script"
    };
}

function emitValueIncrementToken() {
    return {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "argument": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "name": "memory"
          },
          "property": {
            "type": "Identifier",
            "name": "pointer"
          }
        },
        "prefix": false
      }
    };
}

function emitValueDeincrementToken() {
    return {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "argument": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "name": "memory"
          },
          "property": {
            "type": "Identifier",
            "name": "pointer"
          }
        },
        "prefix": false
      }
    };
}

function emitPointerIncrementToken() {
    return {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "argument": {
          "type": "Identifier",
          "name": "pointer"
        },
        "prefix": false
      }
    };
}

function emitPointerDeincrementToken() {
    return {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "argument": {
          "type": "Identifier",
          "name": "pointer"
        },
        "prefix": false
      }
    };
}



function emitOutputToken() {
  return {
    "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "process"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "stdout"
                  }
                },
                "property": {
                  "type": "Identifier",
                  "name": "write"
                }
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "String"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "fromCharCode"
                    }
                  },
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "memory"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "pointer"
                      }
                    }
                  ]
                }
              ]
            }
          }
  }




function emitLoopZeroToken(content) {
    const flatten = _.flattenDeep(content);
    return {
      "type": "WhileStatement",
      "test": {
        "type": "MemberExpression",
        "computed": true,
        "object": {
          "type": "Identifier",
          "name": "memory"
        },
        "property": {
          "type": "Identifier",
          "name": "pointer"
        }
      },
      "body": {
        "type": "BlockStatement",
        "body": flatten
      }
    }
}

function emitAssignmentToken() {
    return {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "name": "memory"
          },
          "property": {
            "type": "Identifier",
            "name": "pointer"
          }
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "name": "Number"
          },
          "arguments": [
            {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "require"
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "fs",
                            "raw": "\"fs\""
                          }
                        ]
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "readFileSync"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "/dev/stdin",
                        "raw": "\"/dev/stdin\""
                      },
                      {
                        "type": "Literal",
                        "value": "utf8",
                        "raw": "\"utf8\""
                      }
                    ]
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "split"
                  }
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "\n",
                    "raw": "'\\n'"
                  }
                ]
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0"
              }
            }
          ]
        }
      }
    };
}

module.exports = {
    emitProgram,
    emitPointerIncrementToken,
    emitPointerDeincrementToken,
    emitValueIncrementToken,
    emitValueDeincrementToken,
    emitAssignmentToken,
    emitOutputToken,
    emitLoopZeroToken,
    // emitLoopNonzeroToken,
}

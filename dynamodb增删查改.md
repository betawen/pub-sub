# dynamodb增删查改

[TOC]

### **Method Summary**[collapse](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#)

- [**batchGetItem**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#batchGetItem-property)

  The BatchGetItem operation returns the attributes of one or more items from one or more tables.

- [**batchWriteItem**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#batchWriteItem-property)

  The BatchWriteItem operation puts or deletes multiple items in one or more tables.

- [**createBackup**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#createBackup-property)

  Creates a backup for an existing table.

- [**createGlobalTable**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#createGlobalTable-property)

  Creates a global table from an existing table.

- [**createTable**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#createTable-property)

  The CreateTable operation adds a new table to your account.

- [**deleteBackup**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#deleteBackup-property)

  Deletes an existing backup of a table.

- [**deleteItem**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#deleteItem-property)

  Deletes a single item in a table by primary key.

- [**deleteTable**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#deleteTable-property)

  The DeleteTable operation deletes a table and all of its items.

- [**describeBackup**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#describeBackup-property)

  Describes an existing backup of a table.

- [**describeContinuousBackups**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#describeContinuousBackups-property)

  Checks the status of continuous backups and point in time recovery on the specified table.

- [**describeEndpoints**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#describeEndpoints-property)

  Calls the DescribeEndpoints API operation.

- [**describeGlobalTable**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#describeGlobalTable-property)

  Returns information about the specified global table.

- [**describeGlobalTableSettings**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#describeGlobalTableSettings-property)

  Describes region specific settings for a global table.

- [**describeLimits**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#describeLimits-property)

  Returns the current provisioned-capacity limits for your AWS account in a region, both for the region as a whole and for any one DynamoDB table that you create there.

- [**describeTable**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#describeTable-property)

  Returns information about the table, including the current status of the table, when it was created, the primary key schema, and any indexes on the table.

- [**describeTimeToLive**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#describeTimeToLive-property)

  Gives a description of the Time to Live (TTL) status on the specified table.

- [**getItem**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#getItem-property)

  The GetItem operation returns a set of attributes for the item with the given primary key.

- [**listBackups**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#listBackups-property)

  List backups associated with an AWS account.

- [**listGlobalTables**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#listGlobalTables-property)

  Lists all global tables that have a replica in the specified region.

- [**listTables**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#listTables-property)

  Returns an array of table names associated with the current account and endpoint.

- [**listTagsOfResource**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#listTagsOfResource-property)

  List all tags on an Amazon DynamoDB resource.

- [**putItem**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#putItem-property)

  Creates a new item, or replaces an old item with a new item.

- [**query**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#query-property)

  The Query operation finds items based on primary key values.

- [**restoreTableFromBackup**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#restoreTableFromBackup-property)

  Creates a new table from an existing backup.

- [**restoreTableToPointInTime**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#restoreTableToPointInTime-property)

  Restores the specified table to the specified point in time within EarliestRestorableDateTime and LatestRestorableDateTime.

- [**scan**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#scan-property)

  The Scan operation returns one or more items and item attributes by accessing every item in a table or a secondary index.

- [**tagResource**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#tagResource-property)

  Associate a set of tags with an Amazon DynamoDB resource.

- [**untagResource**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#untagResource-property)

  Removes the association of tags from an Amazon DynamoDB resource.

- [**updateContinuousBackups**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#updateContinuousBackups-property)

  UpdateContinuousBackups enables or disables point in time recovery for the specified table.

- [**updateGlobalTable**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#updateGlobalTable-property)

  Adds or removes replicas in the specified global table.

- [**updateGlobalTableSettings**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#updateGlobalTableSettings-property)

  Updates settings for a global table.

- [**updateItem**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#updateItem-property)

  Edits an existing item's attributes, or adds a new item to the table if it does not already exist.

- [**updateTable**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#updateTable-property)

  Modifies the provisioned throughput settings, global secondary indexes, or DynamoDB Streams settings for a given table.

- [**updateTimeToLive**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#updateTimeToLive-property)

  The UpdateTimeToLive method will enable or disable TTL for the specified table.

- [**waitFor**(state, params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#waitFor-property)

  Waits for a given DynamoDB resource.

Methods inherited from [AWS.Service](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Service.html)

[makeRequest](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Service.html#makeRequest-property), [makeUnauthenticatedRequest](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Service.html#makeUnauthenticatedRequest-property), [defineService](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Service.html#defineService-property)

### [**batchWriteItem**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#batchWriteItem-property)

[link]:<https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#batchWriteItem-property>

```javascript
/* This example adds three new items to the Music table using a batch of three PutItem requests. */
var params = {
RequestItems: {
"Music": [
{
PutRequest: {
Item: {
"AlbumTitle": {
S: "Somewhat Famous"
}, 
"Artist": {
S: "No One You Know"
}, 
"SongTitle": {
S: "Call Me Today"
}
}
}
}, 
{
PutRequest: {
Item: {
"AlbumTitle": {
S: "Songs About Life"
}, 
"Artist": {
S: "Acme Band"
}, 
"SongTitle": {
S: "Happy Day"
}
}
}
}, 
{
PutRequest: {
Item: {
"AlbumTitle": {
S: "Blue Sky Blues"
}, 
"Artist": {
S: "No One You Know"
}, 
"SongTitle": {
S: "Scared of My Shadow"
}
}
}
}
]
}
};
dynamodb.batchWriteItem(params, function(err, data) {
if (err) console.log(err, err.stack); // an error occurred
else     console.log(data);           // successful response
/*
data = {
}
*/
});
```

```javascript
RequestItems: { /* required */
'<TableName>': [
{
DeleteRequest: {
Key: { /* required */
'<AttributeName>': { /* AttributeValue */
B: new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
BOOL: true || false,
BS: [
new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
/* more items */
],
L: [
/* recursive AttributeValue */,
/* more items */
],
M: {
'<AttributeName>': /* recursive AttributeValue */,
/* '<AttributeName>': ... */
},
N: 'STRING_VALUE',
NS: [
'STRING_VALUE',
/* more items */
],
NULL: true || false,
S: 'STRING_VALUE',
SS: [
'STRING_VALUE',
/* more items */
]
},
/* '<AttributeName>': ... */
}
},
PutRequest: {
Item: { /* required */
'<AttributeName>': { /* AttributeValue */
B: new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
BOOL: true || false,
BS: [
new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
/* more items */
],
L: [
/* recursive AttributeValue */,
/* more items */
],
M: {
'<AttributeName>': /* recursive AttributeValue */,
/* '<AttributeName>': ... */
},
N: 'STRING_VALUE',
NS: [
'STRING_VALUE',
/* more items */
],
NULL: true || false,
S: 'STRING_VALUE',
SS: [
'STRING_VALUE',
/* more items */
]
},
/* '<AttributeName>': ... */
}
}
},
/* more items */
],
/* '<TableName>': ... */
},
ReturnConsumedCapacity: INDEXES | TOTAL | NONE,
ReturnItemCollectionMetrics: SIZE | NONE
};
dynamodb.batchWriteItem(params, function(err, data) {
if (err) console.log(err, err.stack); // an error occurred
else     console.log(data);           // successful response
});
```

### [**batchGetItem**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#batchGetItem-property)

[link]:<https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#batchGetItem-property>

```javascript
/* This example reads multiple items from the Music table using a batch of three GetItem requests.  Only the AlbumTitle attribute is returned. */

 var params = {
  RequestItems: {
   "Music": {
     Keys: [
        {
       "Artist": {
         S: "No One You Know"
        }, 
       "SongTitle": {
         S: "Call Me Today"
        }
      }, 
        {
       "Artist": {
         S: "Acme Band"
        }, 
       "SongTitle": {
         S: "Happy Day"
        }
      }, 
        {
       "Artist": {
         S: "No One You Know"
        }, 
       "SongTitle": {
         S: "Scared of My Shadow"
        }
      }
     ], 
     ProjectionExpression: "AlbumTitle"
    }
  }
 };
 dynamodb.batchGetItem(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
   /*
   data = {
    Responses: {
     "Music": [
         {
        "AlbumTitle": {
          S: "Somewhat Famous"
         }
       }, 
         {
        "AlbumTitle": {
          S: "Blue Sky Blues"
         }
       }, 
         {
        "AlbumTitle": {
          S: "Louder Than Ever"
         }
       }
      ]
    }
   }
   */
 });
```

- Calling the batchGetItem operation

```javascript
RequestItems: { /* required */
'<TableName>': {
Keys: [ /* required */
{
'<AttributeName>': { /* AttributeValue */
B: new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
BOOL: true || false,
BS: [
new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
/* more items */
],
L: [
/* recursive AttributeValue */,
/* more items */
],
M: {
'<AttributeName>': /* recursive AttributeValue */,
/* '<AttributeName>': ... */
},
N: 'STRING_VALUE',
NS: [
'STRING_VALUE',
/* more items */
],
NULL: true || false,
S: 'STRING_VALUE',
SS: [
'STRING_VALUE',
/* more items */
]
},
/* '<AttributeName>': ... */
},
/* more items */
],
AttributesToGet: [
'STRING_VALUE',
/* more items */
],
ConsistentRead: true || false,
ExpressionAttributeNames: {
'<ExpressionAttributeNameVariable>': 'STRING_VALUE',
/* '<ExpressionAttributeNameVariable>': ... */
},
ProjectionExpression: 'STRING_VALUE'
},
/* '<TableName>': ... */
},
ReturnConsumedCapacity: INDEXES | TOTAL | NONE
};
dynamodb.batchGetItem(params, function(err, data) {
if (err) console.log(err, err.stack); // an error occurred
else     console.log(data);           // successful response
});
```

### [**putItem**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#putItem-property)

[link]: <https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#putItem-property>

```javascript
var params = {
Item: {
"AlbumTitle": {
S: "Somewhat Famous"
}, 
"Artist": {
S: "No One You Know"
}, 
"SongTitle": {
S: "Call Me Today"
}
}, 
ReturnConsumedCapacity: "TOTAL", 
TableName: "Music"
};
dynamodb.putItem(params, function(err, data) {
if (err) console.log(err, err.stack); // an error occurred
else     console.log(data);           // successful response
/*
data = {
ConsumedCapacity: {
CapacityUnits: 1, 
TableName: "Music"
}
}
*/
});
```

```javascript
var params = {
  Item: { /* required */
    '<AttributeName>': { /* AttributeValue */
      B: new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
      BOOL: true || false,
      BS: [
        new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
        /* more items */
      ],
      L: [
        /* recursive AttributeValue */,
        /* more items */
      ],
      M: {
        '<AttributeName>': /* recursive AttributeValue */,
        /* '<AttributeName>': ... */
      },
      N: 'STRING_VALUE',
      NS: [
        'STRING_VALUE',
        /* more items */
      ],
      NULL: true || false,
      S: 'STRING_VALUE',
      SS: [
        'STRING_VALUE',
        /* more items */
      ]
    },
    /* '<AttributeName>': ... */
  },
  TableName: 'STRING_VALUE', /* required */
  ConditionExpression: 'STRING_VALUE',
  ConditionalOperator: AND | OR,
  Expected: {
    '<AttributeName>': {
      AttributeValueList: [
        { /* AttributeValue */
          B: new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
          BOOL: true || false,
          BS: [
            new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
            /* more items */
          ],
          L: [
            /* recursive AttributeValue */,
            /* more items */
          ],
          M: {
            '<AttributeName>': /* recursive AttributeValue */,
            /* '<AttributeName>': ... */
          },
          N: 'STRING_VALUE',
          NS: [
            'STRING_VALUE',
            /* more items */
          ],
          NULL: true || false,
          S: 'STRING_VALUE',
          SS: [
            'STRING_VALUE',
            /* more items */
          ]
        },
        /* more items */
      ],
      ComparisonOperator: EQ | NE | IN | LE | LT | GE | GT | BETWEEN | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS | BEGINS_WITH,
      Exists: true || false,
      Value: { /* AttributeValue */
        B: new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
        BOOL: true || false,
        BS: [
          new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
          /* more items */
        ],
        L: [
          /* recursive AttributeValue */,
          /* more items */
        ],
        M: {
          '<AttributeName>': /* recursive AttributeValue */,
          /* '<AttributeName>': ... */
        },
        N: 'STRING_VALUE',
        NS: [
          'STRING_VALUE',
          /* more items */
        ],
        NULL: true || false,
        S: 'STRING_VALUE',
        SS: [
          'STRING_VALUE',
          /* more items */
        ]
      }
    },
    /* '<AttributeName>': ... */
  },
  ExpressionAttributeNames: {
    '<ExpressionAttributeNameVariable>': 'STRING_VALUE',
    /* '<ExpressionAttributeNameVariable>': ... */
  },
  ExpressionAttributeValues: {
    '<ExpressionAttributeValueVariable>': { /* AttributeValue */
      B: new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
      BOOL: true || false,
      BS: [
        new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
        /* more items */
      ],
      L: [
        /* recursive AttributeValue */,
        /* more items */
      ],
      M: {
        '<AttributeName>': /* recursive AttributeValue */,
        /* '<AttributeName>': ... */
      },
      N: 'STRING_VALUE',
      NS: [
        'STRING_VALUE',
        /* more items */
      ],
      NULL: true || false,
      S: 'STRING_VALUE',
      SS: [
        'STRING_VALUE',
        /* more items */
      ]
    },
    /* '<ExpressionAttributeValueVariable>': ... */
  },
  ReturnConsumedCapacity: INDEXES | TOTAL | NONE,
  ReturnItemCollectionMetrics: SIZE | NONE,
  ReturnValues: NONE | ALL_OLD | UPDATED_OLD | ALL_NEW | UPDATED_NEW
};
dynamodb.putItem(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
```



### [**getItem**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#getItem-property)

[link]: <https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#getItem-property>

```javascript
/* This example retrieves an item from the Music table. The table has a partition key and a sort key (Artist and SongTitle), so you must specify both of these attributes. */

 var params = {
  Key: {
   "Artist": {
     S: "Acme Band"
    }, 
   "SongTitle": {
     S: "Happy Day"
    }
  }, 
  TableName: "Music"
 };
 dynamodb.getItem(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
   /*
   data = {
    Item: {
     "AlbumTitle": {
       S: "Songs About Life"
      }, 
     "Artist": {
       S: "Acme Band"
      }, 
     "SongTitle": {
       S: "Happy Day"
      }
    }
   }
   */
 });
```

```javascript
var params = {
  Key: { /* required */
    '<AttributeName>': { /* AttributeValue */
      B: new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
      BOOL: true || false,
      BS: [
        new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
        /* more items */
      ],
      L: [
        /* recursive AttributeValue */,
        /* more items */
      ],
      M: {
        '<AttributeName>': /* recursive AttributeValue */,
        /* '<AttributeName>': ... */
      },
      N: 'STRING_VALUE',
      NS: [
        'STRING_VALUE',
        /* more items */
      ],
      NULL: true || false,
      S: 'STRING_VALUE',
      SS: [
        'STRING_VALUE',
        /* more items */
      ]
    },
    /* '<AttributeName>': ... */
  },
  TableName: 'STRING_VALUE', /* required */
  AttributesToGet: [
    'STRING_VALUE',
    /* more items */
  ],
  ConsistentRead: true || false,
  ExpressionAttributeNames: {
    '<ExpressionAttributeNameVariable>': 'STRING_VALUE',
    /* '<ExpressionAttributeNameVariable>': ... */
  },
  ProjectionExpression: 'STRING_VALUE',
  ReturnConsumedCapacity: INDEXES | TOTAL | NONE
};
dynamodb.getItem(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
```

### [**updateItem**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#updateItem-property)

[link]: <https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#updateItem-property>

```javascript
/* This example updates an item in the Music table. It adds a new attribute (Year) and modifies the AlbumTitle attribute.  All of the attributes in the item, as they appear after the update, are returned in the response. */

 var params = {
  ExpressionAttributeNames: {
   "#AT": "AlbumTitle", 
   "#Y": "Year"
  }, 
  ExpressionAttributeValues: {
   ":t": {
     S: "Louder Than Ever"
    }, 
   ":y": {
     N: "2015"
    }
  }, 
  Key: {
   "Artist": {
     S: "Acme Band"
    }, 
   "SongTitle": {
     S: "Happy Day"
    }
  }, 
  ReturnValues: "ALL_NEW", 
  TableName: "Music", 
  UpdateExpression: "SET #Y = :y, #AT = :t"
 };
 dynamodb.updateItem(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
   /*
   data = {
    Attributes: {
     "AlbumTitle": {
       S: "Louder Than Ever"
      }, 
     "Artist": {
       S: "Acme Band"
      }, 
     "SongTitle": {
       S: "Happy Day"
      }, 
     "Year": {
       N: "2015"
      }
    }
   }
   */
 });
```

```javascript
var params = {
  Key: { /* required */
    '<AttributeName>': { /* AttributeValue */
      B: new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
      BOOL: true || false,
      BS: [
        new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
        /* more items */
      ],
      L: [
        /* recursive AttributeValue */,
        /* more items */
      ],
      M: {
        '<AttributeName>': /* recursive AttributeValue */,
        /* '<AttributeName>': ... */
      },
      N: 'STRING_VALUE',
      NS: [
        'STRING_VALUE',
        /* more items */
      ],
      NULL: true || false,
      S: 'STRING_VALUE',
      SS: [
        'STRING_VALUE',
        /* more items */
      ]
    },
    /* '<AttributeName>': ... */
  },
  TableName: 'STRING_VALUE', /* required */
  AttributeUpdates: {
    '<AttributeName>': {
      Action: ADD | PUT | DELETE,
      Value: { /* AttributeValue */
        B: new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
        BOOL: true || false,
        BS: [
          new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
          /* more items */
        ],
        L: [
          /* recursive AttributeValue */,
          /* more items */
        ],
        M: {
          '<AttributeName>': /* recursive AttributeValue */,
          /* '<AttributeName>': ... */
        },
        N: 'STRING_VALUE',
        NS: [
          'STRING_VALUE',
          /* more items */
        ],
        NULL: true || false,
        S: 'STRING_VALUE',
        SS: [
          'STRING_VALUE',
          /* more items */
        ]
      }
    },
    /* '<AttributeName>': ... */
  },
  ConditionExpression: 'STRING_VALUE',
  ConditionalOperator: AND | OR,
  Expected: {
    '<AttributeName>': {
      AttributeValueList: [
        { /* AttributeValue */
          B: new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
          BOOL: true || false,
          BS: [
            new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
            /* more items */
          ],
          L: [
            /* recursive AttributeValue */,
            /* more items */
          ],
          M: {
            '<AttributeName>': /* recursive AttributeValue */,
            /* '<AttributeName>': ... */
          },
          N: 'STRING_VALUE',
          NS: [
            'STRING_VALUE',
            /* more items */
          ],
          NULL: true || false,
          S: 'STRING_VALUE',
          SS: [
            'STRING_VALUE',
            /* more items */
          ]
        },
        /* more items */
      ],
      ComparisonOperator: EQ | NE | IN | LE | LT | GE | GT | BETWEEN | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS | BEGINS_WITH,
      Exists: true || false,
      Value: { /* AttributeValue */
        B: new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
        BOOL: true || false,
        BS: [
          new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
          /* more items */
        ],
        L: [
          /* recursive AttributeValue */,
          /* more items */
        ],
        M: {
          '<AttributeName>': /* recursive AttributeValue */,
          /* '<AttributeName>': ... */
        },
        N: 'STRING_VALUE',
        NS: [
          'STRING_VALUE',
          /* more items */
        ],
        NULL: true || false,
        S: 'STRING_VALUE',
        SS: [
          'STRING_VALUE',
          /* more items */
        ]
      }
    },
    /* '<AttributeName>': ... */
  },
  ExpressionAttributeNames: {
    '<ExpressionAttributeNameVariable>': 'STRING_VALUE',
    /* '<ExpressionAttributeNameVariable>': ... */
  },
  ExpressionAttributeValues: {
    '<ExpressionAttributeValueVariable>': { /* AttributeValue */
      B: new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
      BOOL: true || false,
      BS: [
        new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
        /* more items */
      ],
      L: [
        /* recursive AttributeValue */,
        /* more items */
      ],
      M: {
        '<AttributeName>': /* recursive AttributeValue */,
        /* '<AttributeName>': ... */
      },
      N: 'STRING_VALUE',
      NS: [
        'STRING_VALUE',
        /* more items */
      ],
      NULL: true || false,
      S: 'STRING_VALUE',
      SS: [
        'STRING_VALUE',
        /* more items */
      ]
    },
    /* '<ExpressionAttributeValueVariable>': ... */
  },
  ReturnConsumedCapacity: INDEXES | TOTAL | NONE,
  ReturnItemCollectionMetrics: SIZE | NONE,
  ReturnValues: NONE | ALL_OLD | UPDATED_OLD | ALL_NEW | UPDATED_NEW,
  UpdateExpression: 'STRING_VALUE'
};
dynamodb.updateItem(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
```

### [**query**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#query-property)

[link]: <https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#query-property>

```javascript
/* This example queries items in the Music table. The table has a partition key and sort key (Artist and SongTitle), but this query only specifies the partition key value. It returns song titles by the artist named "No One You Know". */

 var params = {
  ExpressionAttributeValues: {
   ":v1": {
     S: "No One You Know"
    }
  }, 
  KeyConditionExpression: "Artist = :v1", 
  ProjectionExpression: "SongTitle", 
  TableName: "Music"
 };
 dynamodb.query(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
   /*
   data = {
    ConsumedCapacity: {
    }, 
    Count: 2, 
    Items: [
       {
      "SongTitle": {
        S: "Call Me Today"
       }
     }
    ], 
    ScannedCount: 2
   }
   */
 });
```

```javascript
var params = {
  TableName: 'STRING_VALUE', /* required */
  AttributesToGet: [
    'STRING_VALUE',
    /* more items */
  ],
  ConditionalOperator: AND | OR,
  ConsistentRead: true || false,
  ExclusiveStartKey: {
    '<AttributeName>': { /* AttributeValue */
      B: new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
      BOOL: true || false,
      BS: [
        new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
        /* more items */
      ],
      L: [
        /* recursive AttributeValue */,
        /* more items */
      ],
      M: {
        '<AttributeName>': /* recursive AttributeValue */,
        /* '<AttributeName>': ... */
      },
      N: 'STRING_VALUE',
      NS: [
        'STRING_VALUE',
        /* more items */
      ],
      NULL: true || false,
      S: 'STRING_VALUE',
      SS: [
        'STRING_VALUE',
        /* more items */
      ]
    },
    /* '<AttributeName>': ... */
  },
  ExpressionAttributeNames: {
    '<ExpressionAttributeNameVariable>': 'STRING_VALUE',
    /* '<ExpressionAttributeNameVariable>': ... */
  },
  ExpressionAttributeValues: {
    '<ExpressionAttributeValueVariable>': { /* AttributeValue */
      B: new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
      BOOL: true || false,
      BS: [
        new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
        /* more items */
      ],
      L: [
        /* recursive AttributeValue */,
        /* more items */
      ],
      M: {
        '<AttributeName>': /* recursive AttributeValue */,
        /* '<AttributeName>': ... */
      },
      N: 'STRING_VALUE',
      NS: [
        'STRING_VALUE',
        /* more items */
      ],
      NULL: true || false,
      S: 'STRING_VALUE',
      SS: [
        'STRING_VALUE',
        /* more items */
      ]
    },
    /* '<ExpressionAttributeValueVariable>': ... */
  },
  FilterExpression: 'STRING_VALUE',
  IndexName: 'STRING_VALUE',
  KeyConditionExpression: 'STRING_VALUE',
  KeyConditions: {
    '<AttributeName>': {
      ComparisonOperator: EQ | NE | IN | LE | LT | GE | GT | BETWEEN | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS | BEGINS_WITH, /* required */
      AttributeValueList: [
        { /* AttributeValue */
          B: new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
          BOOL: true || false,
          BS: [
            new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
            /* more items */
          ],
          L: [
            /* recursive AttributeValue */,
            /* more items */
          ],
          M: {
            '<AttributeName>': /* recursive AttributeValue */,
            /* '<AttributeName>': ... */
          },
          N: 'STRING_VALUE',
          NS: [
            'STRING_VALUE',
            /* more items */
          ],
          NULL: true || false,
          S: 'STRING_VALUE',
          SS: [
            'STRING_VALUE',
            /* more items */
          ]
        },
        /* more items */
      ]
    },
    /* '<AttributeName>': ... */
  },
  Limit: 0,
  ProjectionExpression: 'STRING_VALUE',
  QueryFilter: {
    '<AttributeName>': {
      ComparisonOperator: EQ | NE | IN | LE | LT | GE | GT | BETWEEN | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS | BEGINS_WITH, /* required */
      AttributeValueList: [
        { /* AttributeValue */
          B: new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
          BOOL: true || false,
          BS: [
            new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
            /* more items */
          ],
          L: [
            /* recursive AttributeValue */,
            /* more items */
          ],
          M: {
            '<AttributeName>': /* recursive AttributeValue */,
            /* '<AttributeName>': ... */
          },
          N: 'STRING_VALUE',
          NS: [
            'STRING_VALUE',
            /* more items */
          ],
          NULL: true || false,
          S: 'STRING_VALUE',
          SS: [
            'STRING_VALUE',
            /* more items */
          ]
        },
        /* more items */
      ]
    },
    /* '<AttributeName>': ... */
  },
  ReturnConsumedCapacity: INDEXES | TOTAL | NONE,
  ScanIndexForward: true || false,
  Select: ALL_ATTRIBUTES | ALL_PROJECTED_ATTRIBUTES | SPECIFIC_ATTRIBUTES | COUNT
};
dynamodb.query(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
```

### [**scan**(params = {}, callback) ⇒ AWS.Request](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#scan-property)

[link]: <https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#scan-property>

```javascript
/* This example scans the entire Music table, and then narrows the results to songs by the artist "No One You Know". For each item, only the album title and song title are returned. */

 var params = {
  ExpressionAttributeNames: {
   "AT": "AlbumTitle", 
   "ST": "SongTitle"
  }, 
  ExpressionAttributeValues: {
   ":a": {
     S: "No One You Know"
    }
  }, 
  FilterExpression: "Artist = :a", 
  ProjectionExpression: "#ST, #AT", 
  TableName: "Music"
 };
 dynamodb.scan(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
   /*
   data = {
    ConsumedCapacity: {
    }, 
    Count: 2, 
    Items: [
       {
      "AlbumTitle": {
        S: "Somewhat Famous"
       }, 
      "SongTitle": {
        S: "Call Me Today"
       }
     }, 
       {
      "AlbumTitle": {
        S: "Blue Sky Blues"
       }, 
      "SongTitle": {
        S: "Scared of My Shadow"
       }
     }
    ], 
    ScannedCount: 3
   }
   */
 });
```

```javascript
var params = {
  TableName: 'STRING_VALUE', /* required */
  AttributesToGet: [
    'STRING_VALUE',
    /* more items */
  ],
  ConditionalOperator: AND | OR,
  ConsistentRead: true || false,
  ExclusiveStartKey: {
    '<AttributeName>': { /* AttributeValue */
      B: new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
      BOOL: true || false,
      BS: [
        new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
        /* more items */
      ],
      L: [
        /* recursive AttributeValue */,
        /* more items */
      ],
      M: {
        '<AttributeName>': /* recursive AttributeValue */,
        /* '<AttributeName>': ... */
      },
      N: 'STRING_VALUE',
      NS: [
        'STRING_VALUE',
        /* more items */
      ],
      NULL: true || false,
      S: 'STRING_VALUE',
      SS: [
        'STRING_VALUE',
        /* more items */
      ]
    },
    /* '<AttributeName>': ... */
  },
  ExpressionAttributeNames: {
    '<ExpressionAttributeNameVariable>': 'STRING_VALUE',
    /* '<ExpressionAttributeNameVariable>': ... */
  },
  ExpressionAttributeValues: {
    '<ExpressionAttributeValueVariable>': { /* AttributeValue */
      B: new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
      BOOL: true || false,
      BS: [
        new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
        /* more items */
      ],
      L: [
        /* recursive AttributeValue */,
        /* more items */
      ],
      M: {
        '<AttributeName>': /* recursive AttributeValue */,
        /* '<AttributeName>': ... */
      },
      N: 'STRING_VALUE',
      NS: [
        'STRING_VALUE',
        /* more items */
      ],
      NULL: true || false,
      S: 'STRING_VALUE',
      SS: [
        'STRING_VALUE',
        /* more items */
      ]
    },
    /* '<ExpressionAttributeValueVariable>': ... */
  },
  FilterExpression: 'STRING_VALUE',
  IndexName: 'STRING_VALUE',
  Limit: 0,
  ProjectionExpression: 'STRING_VALUE',
  ReturnConsumedCapacity: INDEXES | TOTAL | NONE,
  ScanFilter: {
    '<AttributeName>': {
      ComparisonOperator: EQ | NE | IN | LE | LT | GE | GT | BETWEEN | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS | BEGINS_WITH, /* required */
      AttributeValueList: [
        { /* AttributeValue */
          B: new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
          BOOL: true || false,
          BS: [
            new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
            /* more items */
          ],
          L: [
            /* recursive AttributeValue */,
            /* more items */
          ],
          M: {
            '<AttributeName>': /* recursive AttributeValue */,
            /* '<AttributeName>': ... */
          },
          N: 'STRING_VALUE',
          NS: [
            'STRING_VALUE',
            /* more items */
          ],
          NULL: true || false,
          S: 'STRING_VALUE',
          SS: [
            'STRING_VALUE',
            /* more items */
          ]
        },
        /* more items */
      ]
    },
    /* '<AttributeName>': ... */
  },
  Segment: 0,
  Select: ALL_ATTRIBUTES | ALL_PROJECTED_ATTRIBUTES | SPECIFIC_ATTRIBUTES | COUNT,
  TotalSegments: 0
};
dynamodb.scan(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
```


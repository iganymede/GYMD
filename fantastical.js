let obj = JSON.parse($response.body);
obj.subscription = {
    "autorenew": true,
    "additional_seats": 4,
    "expiration": "2099-12-31T16:49:37.000000Z",
    "uuid": "78hg9ji0-9j80-40kk-nj90-897827klsf6",
    "subscription_type": "AppStore",
    "is_expired": false,
    "is_canceled": false,
    "trial": true,
    "dependents": [],
    "parent": null,
    "pending_invitations": []
  };

$done({body: JSON.stringify(obj)});

let obj = JSON.parse($response.body);
obj.subscribed = true;
obj.subscriptionStatus = YEARLY_SUBSCRIBED;
obj.eligibleForFreeTrial = true;
$done({body: JSON.stringify(obj)});
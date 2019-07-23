**Screenshots**

<div >
<img src="Screenshot_20190723-111623.jpg" width="250" alt=" screen 1" style="padding:10px">
<img src="Screenshot_20190723-111640.jpg" width="250" alt="screen 2"  style="padding:10px">
<img src="Screenshot_20190723-111651.jpg" width="250" alt="screen 3"  style="padding:10px">
</div>

**React Native Android Library Voguepay**
This React library provides a wrapper to add VoguePay Payment to your React application.

**Get Started**
There are many ways to do this, here's the way I do it:

**Install**
* Do `npm install --save git+https://github.com/marshalsoft/react-native-voguepay.git` 
* Do `npm install --save react-native-voguepay`
<br/>
 in your main project.

**Simply `import/require` it by the name library's (react-native-voguepay)`:**

    ```javascript
    import VoguePay from 'react-native-voguepay'
    ```
**5. Include as a component.**
```
import VoguePay from 'react-native-voguepay';

   <VoguePay 
   params={{
    amount:2345,
    currency:"NGN",
    success_url:"http://www.example.com/success.php&type=json", // type=xml or type=json
    fail_url:"http://www.example.com/fail.php&type=json",
    notify_url:"http://www.example.com/notify.php&type=json",
    memo:"Payment for book",
    merchant_id:"xxxx-xxxxxxx", // user merchant_id:"demo" for testing
    merchant_ref:"xxxxxxx" // custom generating transaction reference by user
   }} 
   
   response={(d:Object)=>{ 
   // response = {success_url:"",fail_url:"",notify_url:"",reference_number:""}
    alert(JSON.stringify(d))
   }} /> 
   ```
 Make sure the following properties ara provided
   * params:Object
   * response:function
   
 **Notification/Order processing API**
VoguePay sends a transaction id to the notification URL provided in your account for every transaction on that account.
<b/>
The transaction ID is sent as a HTTP POST variable (transaction_id) e.g:<br>
If your notification URL is //mydomain.com/notify_url.php&type=json<br>
then notification will be sent to :<br> 

        ```
        //mydomain.com/notify_url.php&type=json
        ```
You can retrieve it as a POST variable e.g $_POST['transaction_id'] for PHP.<b/>
You can confirm the status and details of a transaction anytime using our REST(full) API below:

```
//voguepay.com/
```
The api accepts parameters as a GET request. Below is a sample api call

```
//voguepay.com/?v_transaction_id=11111&amp;type=json
```
 For demo transactions, use:
```
//voguepay.com/?v_transaction_id=11111&amp;type=xml&amp;demo=true
```
Sample JSON Response

```
{
    "merchant_id":"qa331322179752",
    "transaction_id":"11111",
    "email":"mii@mydomain.com",
    "total":500,
    "total_paid_by_buyer":"507.61",
    "total_credited_to_merchant":"495.00",
    "extra_charges_by_merchant":"0.00",
    "merchant_ref":"2f093e72",
    "memo":"1000 SMS units at &amp;amp;#8358;1.20 each on www.mysms.com",
    "status":"Approved",
    "date":"2012-01-09 18:56:23",
    "referrer":"http://www.afrisoft.net/viewinvoice.php?id=2012",
    "fund_maturity":"2012-01-11",
    "cur":"USD"
}
```

**Explanation of Responses**

                            <table class="table table-striped table-bordered table-hover">
                                <tbody>
                                    <tr>
                                        <th>Response Key</th>
                                        <th>Value</th>
                                    </tr>
                                    <tr>
                                        <td>merchant_id</td>
                                        <td>Merchant ID Of The Seller</td>
                                    </tr>
                                    <tr>
                                        <td>transaction_id</td>
                                        <td>Transaction ID of the transaction</td>
                                    </tr>
                                    <tr>
                                        <td>email</td>
                                        <td>email address of buyer</td>
                                    </tr>
                                    <tr>
                                        <td>total</td>
                                        <td>Total price of products being paid for</td>
                                    </tr>
                                    <tr>
                                        <td>total_paid_by_buyer</td>
                                        <td>Total amount paid by buyer including any other charges</td>
                                    </tr>
                                    <tr>
                                        <td>total_credited_to_merchant</td>
                                        <td>Total amount creditable to the merchant's wallet</td>
                                    </tr>
                                    <tr>
                                        <td>extra_charges_by_merchant</td>
                                        <td>Extra charges placed on buyer by merchant such as taxes e.t.c</td>
                                    </tr>
                                    <tr>
                                        <td>merchant_ref</td>
                                        <td>merchant_ref value sent with the html form by the merchant</td>
                                    </tr>
                                    <tr>
                                        <td>memo</td>
                                        <td>Transaction memo that describes the transaction</td>
                                    </tr>
                                    <tr>
                                        <td>status</td>
                                        <td>Approved or Declined or Partially Refunded or Fully Refunded</td>
                                    </tr>
                                    <tr>
                                        <td>date</td>
                                        <td>Date of transaction in the format <b>yyyy-mm-dd hh:ii:ss</b> e.g 2012-01-09 18:56:23</td>
                                    </tr>
                                    <tr>
                                        <td>referrer</td>
                                        <td>The merchant page from which the transaction form was sent to VoguePay e.g http://www.afrisoft.net/viewinvoice.php?id=2012</td>
                                    </tr>
                                    <tr>
                                        <td>fund_maturity</td>
                                        <td>The date that the merchant will be able to withdraw or spend the amount credited to his/her wallet as a result of this transaction</td>
                                    </tr>
                                    <tr>
                                        <td>cur</td>
                                        <td>Currency in which transaction was executed</td>
                                    </tr>
                                </tbody>
                            </table>

for details check 
* [voguepay api documentations](https://voguepay.com/documentation#section-two)
<b/>
<b/>
 **License**
 * This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/marshalsoft/react-native-voguepay/blob/master/LICENSE) file for details

 31 9 - 10 
 
 **Keywords**
 * Javascript,github,react-native,Open Source,payments,Voguepay,payment,Gateway,react-native-voguepay
 
 **Author**
 * Name: Engr. Marshall Ekene
 * [Email](mailto://admin@marshalsoft.pro)
 * [Website](https:// www.marshalsoft.pro)
 * [Website](https:// www.marshalsoft.net)
 * [facebook](https://www.facebook.com/marshalsoft)
 * [twitter](https://twitter.com/Marshallekene)
 * [Youtube](https://www.youtube.com/c/MarshallEkene)

 **issues**
 * [report issues](https://github.com/marshalsoft/react-native-voguepay/issues)
